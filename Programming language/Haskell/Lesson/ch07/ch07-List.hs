import Data.List


-- intersperse 取一个元素与 List 作参数，并将该元素置于 List 中每对元素的中间。
mk :: [Char]
mk = intersperse '.' "MONKEY"  

-- intercalate 取两个 List 作参数。它会将第一个 List 交叉插入第二个 List 中间，并返回一个 List.
htg :: [Char]
htg = intercalate " " ["hey","there","guys"]  


-- transpose 函数可以反转一组 List 的 List。你若把一组 List 的 List 看作是个 2D 的矩阵，那 transpose 的操作就是将其列为行
rev :: [[Integer]]
rev = transpose [[1,2,3],[4,5,6],[7,8,9]]  
-- [[1,4,7],[2,5,8],[3,6,9]]  


-- 假如有两个多项式 3x2 + 5x + 9，10x3 + 9 和 8x3 + 5x2 + x - 1，
-- 将其相加，我们可以列三个 List: [0,3,5,9]，[10,0,0,9] 和 [8,5,1,-1] 来表示。
-- 再用如下的方法取得结果
res :: [Integer]
res = map sum $ transpose [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]  
--[18,8,6,17]