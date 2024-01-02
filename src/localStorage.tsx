export default function getLocalStorage() {
  const submissions = localStorage.getItem("submissions");
  if (submissions) {
    return JSON.parse(submissions);
  } else {
    return [];
  }
}
