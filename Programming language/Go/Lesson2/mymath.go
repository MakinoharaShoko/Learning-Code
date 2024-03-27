package mymath

func Sum(a int, b int) int {
	return a + b
}

func ErrorSum(a int, b int) int {
	return a - b
}

func Fib(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	return Fib(n-1) + Fib(n-2)
}
