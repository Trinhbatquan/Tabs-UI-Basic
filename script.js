const $ = document.querySelector.bind(document);
console.log($); // tao function querySelector

const $$ = document.querySelectorAll.bind(document);
console.log($$); // tao function querySelectorAll

const tabsItem = $$(".tab-item");
const tabsItemActive = $(".tab-item.active");
const line = $(".line");
const tabsPane = $$(".tab-pane");
console.log(tabsItem);
console.log(line);
console.log(tabsPane);
line.style.left = tabsItemActive.offsetLeft + "px";
line.style.width = tabsItemActive.offsetWidth + "px";

tabsItem.forEach((e,index) => {
  e.onclick = (element) => {
    console.log(element.target);
    const tabsItemActiveDemo = $(".tab-item.active");
    tabsItemActiveDemo.classList.remove("active");
    element.target.classList.add("active");

    line.style.left = element.target.offsetLeft + "px";
    line.style.width = element.target.offsetWidth + "px";

    const selectTabsPane = tabsPane[index];
    const tabsPaneDemo = $(".tab-pane.active");
    tabsPaneDemo.classList.remove('active');
    selectTabsPane.classList.add('active');

  };
});
