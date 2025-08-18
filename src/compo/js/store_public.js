export const store_public = {
    // count와 각 메서드 설정
    count: 0,
    increment() {
        this.count += 1
    },
    decrement() {
        this.count -= 1
    },
    reset() {
        this.count = 0
    }
}