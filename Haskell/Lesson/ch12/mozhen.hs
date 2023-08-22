import Data.Functor
import Data.Monoid
import Control.Monad

f = Just (\x -> Just (x + 1)) :: Maybe (Int -> Maybe Int)

a = Just 3 :: Maybe Int

main = do
  let f = Just (\x -> Just (x + 1))
  let
  let result = (a >>=) =<< f :: Maybe Int
  let result2 = join $ f <*> a
  print result
  print result2