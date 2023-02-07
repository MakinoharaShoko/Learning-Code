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