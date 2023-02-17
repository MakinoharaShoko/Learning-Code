import Data.List

-- 命名导入
import qualified Data.Map as M

numUniques :: (Eq a) => [a] -> Int  
numUniques = length . nub