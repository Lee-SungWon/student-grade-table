var gradeBadge = document.querySelector('.badge');

class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    gradeBadge.textContent = newAverage;
  }
}
