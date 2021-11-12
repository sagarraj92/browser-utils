(() => {
  let count = 0;


  function getAllButtons() {
    return document.querySelectorAll('[aria-label^="Follow @"]') || [];

  }


  async function follow() {
    const buttons = getAllButtons();

    for (let button of buttons) {
      count = count + 1;

      button.click();

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  async function run() {
    await follow();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const buttons = getAllButtons();
    if (buttons.length) run();
  }
  run();
})();