-- 接受一个函数，这个函数从一个型别映射到另一个型别（型别构造子），还接受一个 functor 装有原始的型别，然后会回传一个 functor 装有映射后的型别
class Functor2 f where
    fmap :: (a -> b) -> f a -> f b

-- 这里的 [] 就是一个函数，接受 Int 这样的类型，返回 [Int] 这样的类型（ f 是一个型别构造子）
-- 实际上就是 fmap 的第二个参数 f a 中的 f
instance Functor2 [] where
    fmap = map