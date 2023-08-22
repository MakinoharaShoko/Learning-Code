import Data.Functor
import Data.Monoid

f = Just (\x -> Just (x + 1)) :: Maybe (Int -> Maybe Int)

a = Just 3 :: Maybe Int

main = do
  let f = Just (\x -> Just (x + 1))
  let
  let result = f >>= (a >>=) :: Maybe Int
  print result