export const scrollTop = (id: string): void => {
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 20;

    window.scrollTo({
      behavior: 'smooth',
      top: offsetPosition
    });
  }
};
