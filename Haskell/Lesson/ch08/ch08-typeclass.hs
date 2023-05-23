data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show) -- 后面的部分是派生 Show 类型，用于在控制台展示

surface :: Shape -> Float
surface (Circle _ _ r) = pi * r ^ 2
surface (Rectangle x1 y1 x2 y2) = abs (x2 - x1) * abs (y2 - y1)