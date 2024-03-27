chain :: (Integral a) => a -> [a]  
chain 1 = [1]  
chain n  
    | even n =  n:chain (n `div` 2)  
    | odd n  =  n:chain (n*3 + 1)

-- \ 开头表示一个 lambda，-> 后是函数体
numLongChains :: Int  
numLongChains = length (filter (\xs -> length xs > 15) (map chain [1..100]))

-- lambda 中模式匹配
t :: [Integer]
t = map (\(a,b) -> a + b) [(1,2),(3,5),(6,3),(2,6),(2,5)]