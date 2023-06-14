-- 定义一个型别类 Eq2
class Eq2 a where
    (===) :: a -> a -> Bool -- 相等
    (/==) :: a -> a -> Bool -- 不相等
    x === y = not (x /== y)
    x /== y = not (x === y)

-- 然而，这并不意味着任何实现 Eq 类型类的类型都应该使用这两个默认的实现。
-- 事实上，当你为一个类型实例化 Eq 类型类时，你应该至少为 (===) 或 (/==) 提供一个具体的实现，否则就会陷入无限递归，无法给出具体结果。

data TrafficLight = Red | Yellow | Green

-- 相等判断，下面定义三个函数的实现
instance Eq2 TrafficLight where
    Red === Red = True
    Green === Green = True
    Yellow === Yellow = True
    _ === _ = False

instance Show TrafficLight where
    show Red = "Red light"
    show Yellow = "Yellow light"
    show Green = "Green light"


-- 与需要计算的类型一起用
instance (Eq2 m) => Eq2 (Maybe m) where
    Just x === Just y = x === y
    Nothing === Nothing = True
    _ === _ = False


-- 不能这样写，因为无法保证 (Maybe m) 中的 m 属于 Eq
-- instance Eq (Maybe m) where
--     Just x == Just y = x == y
--     Nothing == Nothing = True
--     _ == _ = False