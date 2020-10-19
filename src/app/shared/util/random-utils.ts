export class RandomUtils {
  static getRandomNum(min: number, max: number): number {
    return Math.floor(min + (Math.random() * (max - min)));
  }
}
