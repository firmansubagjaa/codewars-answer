/*
   who likes it?

   https://github.com/sindresorhus/who-likes-it

   siapkan sebuah function bernama whoLikesItn dengan menggunakan tipe data
   string yang menerima parameter berupa array of string
*/

const whoLikesIt = (likes: string[]): void => {
  const like = likes.length;

  if (like === 0) console.log("No one likes this");
  if (like === 1) console.log(`${likes[0]} likes this`);
  if (like === 2) console.log(`${likes[0]} and ${likes[1]} likes this`);
  if (like === 3)
    console.log(`${likes[0]}, ${likes[1]}, and ${likes[2]} likes this`);
  if (like > 4)
    console.log(
      `${likes[0]}, ${likes[1]}, and ${likes.length - 2} others like this`
    );
};

const arr = ["Peter", "John", "James", "Mary", "Joseph", "Max"];
whoLikesIt(arr);
