즉각적인 대응이 어려워 소스도 같이 푸시합니다.

쿼리 구문 오류는 com.forcepoint.keystrokeviewer.repositories 패키지의 OracleEvidenceJdbcRepository 클래스의 내용을 수정하면 됩니다.
아니면 카톡 주시면 10분 내로 수정 반영할 수 있도록 하겠습니다. 다만 빌드는 어려울듯 하여 소스를 받은 쪽에서 새로 빌드하여 모듈을 적용시켜주셨으면 합니다.

빌드는 git 내용을 모두 pull 한 뒤 아래 명령을 소스폴더 루트에서 실행하면 build/libs 폴더에 새 모듈이 생성됩니다.

gradle clean build -x test