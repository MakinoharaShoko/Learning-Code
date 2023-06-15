-- 接受一个函数，这个函数从一个型别映射到另一个型别（型别构造子），还接受一个 functor 装有原始的型别，然后会回传一个 functor 装有映射后的型别
class Functor2 f where
    fmap2 :: (a -> b) -> f a -> f b

-- 这里的 [] 就是一个函数，接受 Int 这样的类型，返回 [Int] 这样的类型（ f 是一个型别构造子）
-- 实际上就是 fmap 的第二个参数 f a 中的 f
instance Functor2 [] where
    fmap2 = map

-- Maybe 接受一个类型，变成一个实际类型。
instance Functor2 Maybe where
    fmap2 f (Just x) = Just (f x) -- 这里的 f 的意思是一个函数，满足 (a->b)
    fmap2 f Nothing = Nothing

data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq)

-- map 一个 Tree
instance Functor2 Tree where
    fmap2 f EmptyTree = EmptyTree
    fmap2 f (Node x leftsub rightsub) =
        Node (f x) (fmap2 f leftsub) (fmap2 f rightsub)

-- Either 这样接受两个参数的构造子
instance Functor2 (Either a) where
    fmap2 f (Right x) = Right (f x)
    fmap2 f (Left x) = Left x