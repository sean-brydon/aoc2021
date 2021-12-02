import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

(async () => {
  const file = await readFile(join(dirname(fileURLToPath(import.meta.url)), "./input.txt"), "utf8");
  const input = file.split("\n").map((a) => {
    return a;
  });

  let x = 0;
  let y = 0;  
  input.forEach((a) => {
    
    let [instruction,action] = a.trim().split(" ");    
    action = parseInt(action); 

    switch (instruction) {
        case 'forward':
          x += action;
          break;
        case 'down':
          y += action;
          break;
        case 'up':
          y -= action;
          break;
        default:
          break;
      }
  })
  console.log({x,y,total:x*y});

})();
