function uid() {
  const head = Math.random().toString(36);
  const tail = Math.random().toString(36).substring(2);

  return `${head}${tail}`;
}

export default uid;
