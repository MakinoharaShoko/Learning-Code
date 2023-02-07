multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z

-- 我们的函数取一个 a，并回传一个型别为 (Num a) => a -> (a -> a) 的函数
multTwoWithNine :: Integer -> Integer -> Integer
multTwoWithNine = multThree 9
-- 调用结果 --
-- ghci> multTwoWithNine 2 3
-- 54
-- ghci> let multWithEighteen = multTwoWithNine 2
-- ghci> multWithEighteen 10

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]  
zipWith' _ [] _ = []  
zipWith' _ _ [] = []  
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys

applyTwice :: (t -> t) -> t -> t
applyTwice  f x = f(f x)