document.addEventListener("DOMContentLoaded", () => {
  let draggedItem = null;
  // const eventFunc = (e) => {
  //   console.log(e.clientX, e.clientY);
  //   do {
  //     for (let i = 0; i < 3; i++) {
  //       const element = document.createElement("div");
  //       element.classList.add(item.className.split(" ")[1], "add-item");
  //       element.style.position = "absolute";
  //       element.style.width = item.style.width;
  //       element.style.height = item.style.height;
  //       element.style.top = `${e.clientY + i * element.style.height}`;
  //       element.style.left = `${e.clientX + i * element.style.width}`;
  //     }
  //   } while (false);
  // };
  let i = 0;
  const node = document.querySelectorAll(".grid-item");
  node.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      draggedItem = item;
      item.classList.add("dragging");
    });
    item.addEventListener("drag", () => {});
    item.addEventListener("dragend", () => {
      setTimeout(() => {
        draggedItem.classList.remove("dragging");
        draggedItem = null;
      }, 0);
    });
    item.addEventListener("dragenter", function (e) {
      e.preventDefault();
      console.log("enter");
      i++;
      console.log(i);
      if (i < 2) {
        const draggedItemValue = +draggedItem.textContent;
        const value = +item.textContent;
        let values;
        if ([1, 2, 3].includes(draggedItemValue)) {
          if (value <= 3) {
            values = [value, value + 3, value + 6];
          } else if (value <= 6) {
            values = [value - 3, value, value + 3];
          } else {
            values = [value - 6, value - 3, value];
          }
        } else {
          if ([2, 5, 8].includes(value)) {
            values = [value - 1, value, value + 1];
          } else if ([1, 4, 7].includes(value)) {
            values = [value, value + 1, value + 2];
          } else {
            values = [value - 2, value - 1, value];
          }
        }
        node.forEach((el) => {
          if (draggedItemValue <= 3) {
            if (values.includes(+el.textContent)) {
              // console.log(values, el.style["borderInline"]);
              if (el.style["borderInline"] !== "2px dashed rgb(0, 0, 0)") {
                el.style["borderInline"] = "2px dashed rgb(0, 0, 0)";
              }
            }
          } else {
            if (values.includes(+el.textContent)) {
              el.style["borderBlock"] = "2px dashed rgb(0, 0, 0)";
            }
          }
        });
      }
    });
    item.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    item.addEventListener("dragleave", function () {
      console.log("leave");
      const draggedItemValue = +draggedItem.textContent;
      const value = +item.textContent;
      let values;
      if ([1, 2, 3].includes(draggedItemValue)) {
        if (value <= 3) {
          values = [value, value + 3, value + 6];
        } else if (value <= 6) {
          values = [value - 3, value, value + 3];
        } else {
          values = [value - 6, value - 3, value];
        }
      } else {
        if ([2, 5, 8].includes(value)) {
          values = [value - 1, value, value + 1];
        } else if ([1, 4, 7].includes(value)) {
          values = [value, value + 1, value + 2];
        } else {
          values = [value - 2, value - 1, value];
        }
      }
      node.forEach((el) => {
        if (draggedItemValue <= 3) {
          if (values.includes(+el.textContent)) {
            // console.log(values, el.style["borderInline"]);
            if (el.style["borderInline"] !== "") {
              el.style["borderInline"] = "";
            }
          }
        } else {
          if (values.includes(+el.textContent)) {
            el.style["borderBlock"] = "";
          }
        }
      });
      i = 0;
    });

    item.addEventListener("drop", function (e) {
      e.preventDefault();
      const draggedItemValue = +draggedItem.textContent;
      const value = +item.textContent;
      let draggedItemValues, values;
      if ([2, 5, 8].includes(value)) {
        values = [value - 1, value, value + 1];
      } else if ([1, 4, 7].includes(value)) {
        values = [value, value + 1, value + 2];
      } else {
        values = [value - 2, value - 1, value];
      }
      if (![1, 2, 3].includes(draggedItemValue)) {
        if ([5, 8].includes(draggedItemValue)) {
          draggedItemValues = [
            draggedItemValue - 1,
            draggedItemValue,
            draggedItemValue + 1,
          ];
        } else if ([4, 7].includes(draggedItemValue)) {
          draggedItemValues = [
            draggedItemValue,
            draggedItemValue + 1,
            draggedItemValue + 2,
          ];
        } else {
          draggedItemValues = [
            draggedItemValue - 2,
            draggedItemValue - 1,
            draggedItemValue,
          ];
        }
      } else {
        draggedItemValues = [
          draggedItemValue,
          draggedItemValue + 3,
          draggedItemValue + 6,
        ];
        if ([1, 2, 3].includes(draggedItemValue)) {
          console.log("bleh", value);
          if (value <= 3) {
            values = [value, value + 3, value + 6];
          } else if (value <= 6) {
            values = [value - 3, value, value + 3];
            console.log(values);
          } else {
            values = [value - 6, value - 3, value];
          }
        }
      }

      node.forEach((el) => {
        if (values.includes(+el.textContent)) {
          el.style.border = "none";
        }
      });
      const draggedArray = [...node].filter((el) =>
        draggedItemValues.includes(+el.textContent)
      );
      const targetArray = [...node].filter((el) =>
        values.includes(+el.textContent)
      );

      for (let i = 0; i < 3; i++) {
        if (
          draggedArray.every((el) => +el.textContent > 3) &&
          targetArray.every((el) => +el.textContent <= 3)
        ) {
          break;
        }
        // console.log(draggedItemValues, values);
        const draggedItemGridArea = draggedArray[i].className.split(" ")[1];
        const targetItemGridArea = targetArray[i].className.split(" ")[1];
        draggedArray[i].classList.remove(draggedItemGridArea);
        draggedArray[i].classList.add(targetItemGridArea);
        targetArray[i].classList.remove(targetItemGridArea);
        targetArray[i].classList.add(draggedItemGridArea);
      }
      // window.removeEventListener("mousemove", eventFunc);
    });
  });
});
