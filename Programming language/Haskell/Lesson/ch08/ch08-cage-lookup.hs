import qualified Data.Map as Map

-- 定义一个数据类型，表示柜子的状态
data LockerState = Taken | Free deriving (Show, Eq)

-- 类型别名
type Code = String

-- 类型计算，定义一个 Map，从 Int 映射到 (LockerState, Code)
type LockerMap = Map.Map Int (LockerState, Code)

-- lockerLookup 接受两个参数，柜子的序号，柜子的 Map，返回字符串或者 Code
lockerLookup :: Int -> LockerMap -> Either String Code
lockerLookup lockerNumber map =
    case Map.lookup lockerNumber map of
        Nothing -> Left $ "Locker number " ++ show lockerNumber ++ " doesn't exist!"
        Just (state, code) -> if state /= Taken
                                then Right code
                                else Left $ "Locker " ++ show lockerNumber ++ " is already taken!"

lockers :: LockerMap
lockers = Map.fromList
    [(100,(Taken,"ZD39I"))
    ,(101,(Free,"JAH3I"))
    ,(103,(Free,"IQSA9"))
    ,(105,(Free,"QOTSA"))
    ,(109,(Taken,"893JJ"))
    ,(110,(Taken,"99292"))
    ]