map' :: (a -> b) -> [a] -> [b]  
map' _ [] = []  
map' f (x:xs) = f x : map' f xs

filter' :: (a -> Bool) -> [a] -> [a]  
filter' _ [] = []  
filter' p (x:xs)   
    | p x       = x : filter' p xs  
    | otherwise = filter' p xs

t :: Integer
t = sum (takeWhile (<10000) (filter odd (map (^2) [1..]))) -- 找所有小于 10000 的奇数的平方的和


-- 取一个自然数，若为偶数就除以 2。 若为奇数就乘以 3 再加 1。 再用相同的方式处理所得的结果，得到一组数字构成的的链。
chain :: (Integral a) => a -> [a]  
chain 1 = [1]  
chain n  
    | even n =  n:chain (n `div` 2)  
    | odd n  =  n:chain (n*3 + 1)


-- 多少个链长度大于15
numLongChains :: Int  
numLongChains = length (filter isLong (map chain [1..100]))  
    where isLong xs = length xs > 15

listOfFuns :: [Integer -> Integer]
listOfFuns = map (*) [0..]