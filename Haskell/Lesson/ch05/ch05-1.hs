quicksort :: (Ord a) => [a] -> [a]  
quicksort [] = []  
quicksort (x:xs) =  
  let smallerSorted = quicksort [a | a <- xs, a <= x] 
      biggerSorted = quicksort [a | a <- xs, a > x]  
  in smallerSorted ++ [x] ++ biggerSorted

--   先定义一个边界条件，再定义个函数，让它从一堆元素中取一个并做点事情后，把余下的元素重新交给这个函数。 
--   这一模式对 List、Tree 等数据结构都是适用的。
--   例如，sum 函数就是一个 List 头部与其尾部的 sum 的和。
--   一个 List 的积便是该 List 的头与其尾部的积相乘的积，
--   一个 List 的长度就是 1 与其尾部长度的和. 
--   等等

maximum' :: (Ord a) => [a] -> a  
maximum' [] = error "maximum of empty list"  
maximum' [x] = x  
maximum' (x:xs) = max x (maximum' xs)