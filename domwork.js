let i = 1;
function newNote() {
  const labl = document.createElement("label");
  labl.innerHTML = "Note" + i;
  document.body.appendChild(labl);

  const newNotta = document.createElement("textarea");
  newNotta.id = "text";
  newNotta.placeholder = "Type your text here...";

  const newNoti = document.createElement("input");
  newNoti.id = "filename";
  newNoti.placeholder = "Write Filename";

  const newNotdb = document.createElement("button");
  newNotdb.id = "download";
  newNotdb.innerHTML = "Download File";

  document.body.appendChild(newNotta);
  document.body.appendChild(newNoti);
  document.body.appendChild(newNotdb);

  newNotdb.addEventListener("click", prep);

  i++;
}

////          Following fucntion is not written by meeee

function downloadFile(filename, content) {
  // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
  const element = document.createElement("a");

  //A blob is a data type that can store binary data
  // "type" is a MIME type
  // It can have a different value, based on a file you want to save
  const blob = new Blob([content], { type: "plain/text" });

  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);

  //setAttribute() Sets the value of an attribute on the specified element.
  element.setAttribute("href", fileUrl); //file location
  element.setAttribute("download", filename); // file name
  element.style.display = "none";

  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();

  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
}

const prep = () => {
  //The value of the file name input box
  const filename = document.getElementById("filename").value + ".txt";

  //The value of what has been input in the textarea
  const content = document.getElementById("text").value;

  // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

  if (filename && content) {
    downloadFile(filename, content);
  }
};
