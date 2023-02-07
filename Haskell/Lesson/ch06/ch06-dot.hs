-- 定义

-- (.) :: (b -> c) -> (a -> b) -> a -> c  
-- f . g = \x -> f (g x)

-- 也就是函数组合

t1 :: [Integer]
t1 = map (\x -> negate (abs x)) [5,-3,-6,7,-3,2,-19,24]  

-- 可改写为
t2 :: [Integer]
t2 = map (negate . abs) [5,-3,-6,7,-3,2,-19,24]  