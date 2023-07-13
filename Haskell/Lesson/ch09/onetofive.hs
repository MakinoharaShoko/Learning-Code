
main = do 
    printRange 1 10

printRange :: Int -> Int -> IO ()
printRange x y
    | x > y = return ()
    | otherwise = do
        print x
        printRange (x+1) y