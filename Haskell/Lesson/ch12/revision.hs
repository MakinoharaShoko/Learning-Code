import Data.Functor
import Data.Monoid
import Control.Monad.Trans.Maybe (MaybeT(MaybeT))

main = do
    let result = fmap (+1) (Just 3)
    let result2 = fmap (*3) (+100)
    let result3 = result2 1
    let result4 = Just (+1) <*> Just 3
    let result5 = (+1) <$> Just 3
    let one = pure 1 :: Maybe Int
    let ninety = Just 9 >>= \x -> return (x*10)  
    print ninety
    print result5
    print one

