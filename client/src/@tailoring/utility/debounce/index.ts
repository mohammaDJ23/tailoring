let timer: NodeJS.Timer;

class Debounce {
  create(delay: number) {
    if (Math.sign(delay) === -1) {
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }

    return new Promise<boolean>(function (resolve, reject) {
      timer = setTimeout(function () {
        resolve(true);
      }, delay);
    });
  }
}

export const debounce = new Debounce();
