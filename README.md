# React Testing Library Example (with Jest)


- RTL은 리액트 컴포넌트 즉, 구현 기반의 테스트 도구이다.

- 테스트를 렌더링할 때, 실제 DOM 노드를 사용하여 테스트하기 때문에 실제 환경과 유사한 환경에서 테스트 케이스가 실행되어 테스트의 신뢰도가 높다.

- RTL은 "테스트는 사용자가 앱과 상호작용하는 방식과 유사해야 한다"라는 기본 철학을 가진다.



![image](https://user-images.githubusercontent.com/62092665/179177411-2c88863d-9ad0-40cb-8094-5ce08db4ea7b.png)


[[TOAST UI] - React Testing Library를 이용한 선언적이고 확장 가능한 테스트](https://ui.toast.com/weekly-pick/ko_20210630#%EC%B2%A0%ED%95%99-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)



## TDD with React

### TDD 장점
  - 소스 코드 안정감 부여
  - 디버깅 시간을 줄이고 실제 개발 시간도 단축할 수 있다.
  - 소스 코드 하나하나 신중하게 짜게되어 깨끗한 코드가 나올 확률이 높다.



## 쿼리 우선순위
  - testing-library는 개발자가 아닌 유저가 사용하고 받아들이는 방식대로 테스트를 작성할 것을 추천한다.
  - 쿼리 우선순위를 참고하여 우선되는 방식으로 테스트를 작성할 것을 추천하고 있다.
  - 쿼리 우선순위 
    - getByRole > getByLabelText > getByPlaceholderText > getByText
    - getByAltText : img, area, input 등에 사용
    - getByTestId는 개발자만 알 수 있기 때문에 비선호되는 방식
  

## userEvent > fireEvent
  - fireEvent보다 userEvent를 사용하는 것이 더 선호된다.
  - useEvent는 fireEvent를 사용해서 만들어졌고, label을 클릭했을 때, checkbox일때 등 엘리먼트 타입에 따라서 적절한 반응을 보여준다.
  - userEvent로 버튼을 클릭하면, 포커싱이 발생하는 등 유저가 실제로 사용하듯이 표현됨




## getBy vs queryBy vs findBy

  1. getBy
      - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상이면 오류 발생
      - 둘 이상일 경우에는 getAllBy를 사용
  
  2. queryBy
      - 쿼리에 대해 일치하는 노드를 반환하고, 일치하는 요소가 없으면 null 반환
      - 존재하지 않는 요소를 어설션하는데 유용하다.
  
  3. findBy
      - 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환
      - 요소가 없거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 reject
