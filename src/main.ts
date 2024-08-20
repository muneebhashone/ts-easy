import z from 'zod';

const isString = z.string();

function main() {
  console.log(isString.parse('Hello TypeScript!'));
}

main();
