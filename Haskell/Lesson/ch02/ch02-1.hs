doubleMe x = x + x

doubleSmallNumber' x = (if x > 100 then x else x * 2) + 1 -- if要返回表达式

a = take 10 (cycle [1, 2, 3])

b = replicate 3 10

c = [x * 2 | x <- [1 .. 10]] -- 集合表示
-- 使 List 中所有大于 10 的奇数变为 "BANG"，小于 10 的奇数变为 "BOOM"

boomBangs xs = [if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]

qs arr = 
    if length arr > 1 then
    qs [x | x <- arr, x < head arr] ++ [x | x <- arr, x == head arr] ++ qs [x | x <- arr, x > head arr]
    else arr

nouns = ["hobo","frog","pope"]
adjectives = ["lazy","grouchy","scheming"]
d = [adjective ++ " " ++ noun | adjective <- adjectives, noun <- nouns]

removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']] -- elem 函数是检测第一个参数的元素是否存在于一个列表

rightTriangles' = [ (a,b,c) | c <- [1..10], b <- [1..c], a <- [1..b], a^2 + b^2 == c^2, a+b+c == 24] 
--先取一个初始的集合并将其变形，执行过滤条件，最终取得正确的结果。