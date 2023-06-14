-- 二叉搜索树
data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq)

-- 创建一个单节点的树
singleton :: a -> Tree a
singleton x = Node x EmptyTree EmptyTree

-- 往树中插入元素
treeInsert :: (Ord a) => a -> Tree a -> Tree a
treeInsert x EmptyTree = singleton x -- 向空树插入
treeInsert x (Node a left right) -- 向非空树插入
      | x == a = Node x left right -- 不做修改
      | x < a  = Node a (treeInsert x left) right  -- 小于，插到左边的树
      | x > a  = Node a left (treeInsert x right) -- 大于，插到右边的树

nums = [8,6,4,1,7,3,5]

numsTree = foldr treeInsert EmptyTree nums