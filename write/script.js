let editingIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'flex';
    document.getElementById('note').innerHTML = '';
    document.getElementById('note-heading').value = '';
    editingIndex = -1;
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.marginTop = '10px';
            document.getElementById('note').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

function saveNote() {
    const heading = document.getElementById('note-heading').value;
    const text = document.getElementById('note').innerHTML;
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    const note = { heading, text };

    if (editingIndex === -1) {
        notes.push(note);
    } else {
        notes[editingIndex] = note;
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
    document.getElementById('writing-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'note-item';
        
        const noteLink = document.createElement('a');
        noteLink.textContent = note.heading ? note.heading.substring(0, 30) : `Note ${index + 1}`;
        noteLink.href = '#';
        noteLink.addEventListener('click', () => editNote(index));
        
        listItem.appendChild(noteLink);
        notesList.appendChild(listItem);
    });
}

function editNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    document.getElementById('note').innerHTML = notes[index].text;
    document.getElementById('note-heading').value = notes[index].heading;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('writing-screen').style.display = 'flex';
    editingIndex = index;
}

function downloadNoteAsTxt() {
    const heading = document.getElementById('note-heading').value;
    const text = document.getElementById('note').innerText;
    const blob = new Blob([heading + '\n\n' + text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = heading ? heading.substring(0, 30) + '.txt' : 'note.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function downloadNoteAsPdf() {
    const heading = document.getElementById('note-heading').value;
    const noteContent = document.getElementById('note');

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set heading style
    doc.setFont('Poppins', 'bold');
    doc.setFontSize(20);

    // Calculate the width of the heading text and position it in the center
    const headingWidth = doc.getTextWidth(heading);
    const pageWidth = doc.internal.pageSize.getWidth();
    const headingX = (pageWidth - headingWidth) / 2;
    let y = 20; // Vertical position on the PDF

    // Add the centered heading
    doc.text(heading, headingX, y);
    y += 20; // Add space after the heading

    // Reset the font to normal for the note content
    doc.setFont('Poppins', 'normal');
    doc.setFontSize(12); // Set font size for the note content

    // Process each element in the note content
    noteContent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            // Add text to the PDF
            const text = node.textContent.trim();
            if (text) {
                const lines = doc.splitTextToSize(text, 180); // Wrap text within page margins
                doc.text(lines, 10, y);
                y += lines.length * 10; // Move down for the next content
            }
        } else if (node.nodeName === 'DIV' || node.nodeName === 'P' || node.nodeName === 'SPAN') {
            // Handle DIV, P, or SPAN elements that contain text
            const text = node.innerText.trim();
            if (text) {
                const lines = doc.splitTextToSize(text, 180); // Wrap text within page margins
                doc.text(lines, 10, y);
                y += lines.length * 10; // Move down for the next content
            }
        } else if (node.nodeName === 'IMG') {
            // Add image to the PDF
            const img = node;
            const imgData = img.src;

            // Calculate image size for the PDF
            const imgWidth = 180; // Image width in PDF
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const imgHeight = imgWidth / aspectRatio;

            // Add the image to the PDF
            doc.addImage(imgData, 'JPEG', 10, y, imgWidth, imgHeight);
            y += imgHeight + 10; // Move down for the next content
        }
    });

    doc.save(heading ? heading.substring(0, 30) + '.pdf' : 'note.pdf');
}