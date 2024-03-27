package main

import (
	"fmt"
)

func printtab() {
	for i := 1; i <= 9; i++ {
		for j := 1; j <= 9; j++ {
			var left int = i
			var right int = j
			var result int = i * j
			fmt.Printf("%d*%d=%d", left, right, result)
			if right < 9 {
				fmt.Print(" ")
			}
		}
		if i < 9 {
			fmt.Println()
		}

	}
}

func main() {
	printtab()
}
