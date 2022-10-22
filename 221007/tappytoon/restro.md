## 문자열 리스트로
```python
list('string')
```

## 회전
```python
from collections import deque
queue = deque([1, 2, 3, 4, 5])
queue.rotate(1) # 오른쪽으로 1 만큼 회전
queue.rotate(-1) # 왼쪽으로 1 만큼 회전
```
