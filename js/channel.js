

const channelTabs = $$(".content__right-channel-heading-tab-item");
const channelTabActive = $(".content__right-channel-heading-tab-item.active");
const channelItems = $$('.content__right-channel-content-tab-item')
const line = $(".content__right-channel-heading-tabs .line");


// Click Active Tab Channel
line.style.left = channelTabActive.offsetLeft + "px";
line.style.width = channelTabActive.offsetWidth + "px"; 
channelTabs.forEach(function (value, index) {
  const channelItem = channelItems[index]
  value.onclick = function () {
    $(".content__right-channel-content-tab-item.active").classList.remove('active')
    $(".content__right-channel-heading-tab-item.active").classList.remove(
      "active"
    );
    channelItem.classList.add('active')
    this.classList.add("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
  };
});