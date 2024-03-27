fn main() {
    let guess = "42".parse::<i32>().expect("Not a number!");
    println!("{}",guess)
}