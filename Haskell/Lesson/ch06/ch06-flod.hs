-- 类似于 JS 的 reduce
sum' :: (Num a) => [a] -> a  
sum' xs = foldl (\acc x -> acc + x) 0 xs

-- 等效于
sum'' :: (Num a) => [a] -> a  
sum'' = foldl (+) 0

-- 实现 elem
elem' :: (Eq a) => a -> [a] -> Bool  
elem' y ys = foldl (\acc x -> if x == y then True else acc) False ys

-- 我们先假设它不存在，以 False 开始。
-- 我们要是 fold 一个空 List，结果就是 False。
-- 然后我们检查当前元素是否为我们寻找的，如果是，就令累加值为 True，如果否，就保留原值不变。
-- 若 False，及表明当前元素不是。若 True，就表明已经找到了。

-- 用 fold 实现 map
map' :: (a -> b) -> [a] -> [b]  
map' f xs = foldr (\x acc -> f x : acc) [] xs

-- 用 foldr 实现 map
map'' :: (a -> b) -> [a] -> [b]  
map'' f xs = foldr (\x acc -> f x : acc) [] xs

-- foldl1 与 foldr1 的行为与 foldl 和 foldr 相似，只是你无需明确提供初始值。
-- 他们假定 List 的首个(或末尾)元素作为起始值，并从旁边的元素开始折叠。
maximum' :: (Ord a) => [a] -> a  
maximum' = foldr1 (\x acc -> if x > acc then x else acc) 

-- scanl 和 scanr 与 foldl 和 foldr 相似，只是它们会记录下累加值的所有状态到一个 List。也有 scanl1 和 scanr1。

t :: [Integer]
t = scanl (+) 0 [3,5,2,1]