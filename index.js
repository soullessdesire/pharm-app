document.addEventListener("DOMContentLoaded", () => {
  let draggedItem = null;
  let enterCount = 0;
  const gridContainer = document.querySelector(".grid-container");
  const gridItems = document.querySelectorAll(".grid-item");
  const rows = 3; // Change this value for different row sizes
  const columns = 3; // Change this value for different column sizes

  const getItemPosition = (item) => {
    const index = Array.from(gridItems).indexOf(item);
    return {
      row: Math.floor(index / columns),
      col: index % columns,
    };
  };

  const getValuesForSwap = (draggedItem, targetItem) => {
    const draggedPos = getItemPosition(draggedItem);
    const targetPos = getItemPosition(targetItem);
    let draggedValues = [];
    let targetValues = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i === draggedPos.row || j === draggedPos.col) {
          draggedValues.push(i * columns + j + 1);
        }
        if (i === targetPos.row || j === targetPos.col) {
          targetValues.push(i * columns + j + 1);
        }
      }
    }

    return { draggedValues, targetValues };
  };

  gridItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      draggedItem = item;
      draggedItem.classList.add("dragging");
      console.log("dragstart");
    });

    item.addEventListener("dragenter", (e) => {
      e.preventDefault();
      enterCount++;
      if (enterCount === 1) {
        const { draggedValues, targetValues } = getValuesForSwap(
          draggedItem,
          item
        );
        gridItems.forEach((el) => {
          if (targetValues.includes(parseInt(el.textContent))) {
            el.style.border = "2px dashed black";
          }
        });
      }
      console.log("dragenter", enterCount);
    });

    item.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    item.addEventListener("dragleave", () => {
      enterCount--;
      if (enterCount === 0) {
        gridItems.forEach((el) => {
          el.style.border = "";
        });
      }
      console.log("dragleave", enterCount);
    });

    item.addEventListener("drop", (e) => {
      e.preventDefault();
      const { draggedValues, targetValues } = getValuesForSwap(
        draggedItem,
        item
      );
      const draggedArray = Array.from(gridItems).filter((el) =>
        draggedValues.includes(parseInt(el.textContent))
      );
      const targetArray = Array.from(gridItems).filter((el) =>
        targetValues.includes(parseInt(el.textContent))
      );

      for (let i = 0; i < draggedArray.length; i++) {
        const draggedItemGridArea = draggedArray[i].className.split(" ")[1];
        const targetItemGridArea = targetArray[i].className.split(" ")[1];
        draggedArray[i].classList.remove(draggedItemGridArea);
        draggedArray[i].classList.add(targetItemGridArea);
        targetArray[i].classList.remove(targetItemGridArea);
        targetArray[i].classList.add(draggedItemGridArea);
      }

      gridItems.forEach((el) => {
        el.style.border = "";
      });

      draggedItem.classList.remove("dragging");
      draggedItem = null;
      enterCount = 0;
      console.log("drop");
    });

    item.addEventListener("dragend", () => {
      draggedItem.classList.remove("dragging");
      draggedItem = null;
      console.log("dragend");
    });
  });
});
