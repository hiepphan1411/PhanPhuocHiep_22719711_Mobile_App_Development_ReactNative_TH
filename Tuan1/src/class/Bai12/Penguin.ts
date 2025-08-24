interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Con chim có thể bay");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("Con cá đang bơi trong nước");
  }
}

// Test
const bird = new Bird();
bird.fly();

const fish = new Fish();
fish.swim();
