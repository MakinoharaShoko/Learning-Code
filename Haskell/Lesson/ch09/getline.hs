main = do
    putStrLn "Hello, what's your name?"
    name <- getLine -- getLine 是一个 IO String，这行代码代表一个绑定，将 IO 的结果绑定到一个名称（name）上
    -- 要从一个 I/O action 中取出值，你必须要在另一个 I/O action 中将他用 <- 绑定给一个名字。
    putStrLn ("Hey " ++ name ++ ", you rock!")