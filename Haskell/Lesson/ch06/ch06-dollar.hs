-- f $ x = f x ，低优先级函数调用符

-- 比如，
t1 :: Double
t1 = sum (map sqrt [1..130])
-- 可修改为
t2 :: Double
t2 = sum $ map sqrt [1..130]

oddSquareSum :: Integer  
oddSquareSum = sum (takeWhile (<10000) (filter odd (map (^2) [1..])))

-- 可写为
oddSquareSum' :: Integer  
oddSquareSum' = sum (takeWhile (<10000) (filter odd (map (^2) [1..])))