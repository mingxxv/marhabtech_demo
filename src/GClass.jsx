import * as React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';


const GClass = () => {

    return (
<div>
<WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title="Lesson 1"
        extra={<span>For teachers</span>}
      />
      <Card.Body>
        <div>Link to materials: <a href="https://classroom.google.com/c/Mzc0NzExMzcyMDQ3">Google Classroom</a></div>
      </Card.Body>
    </Card>
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title="Lesson 2"
        extra={<span>For Teachers</span>}
      />
      <Card.Body>
      <div>Link to materials: <a href="https://classroom.google.com/c/Mzc0NzExMzcyMDQ3">Google Classroom</a></div>
      </Card.Body>
    </Card>
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title="Student Worksheets"
        extra={<span>For Students</span>}
      />
      <Card.Body>
        <div>Link to worksheets: <a href="https://classroom.google.com/c/Mzc0NzExMzcyMDQ3">Worksheets</a></div>
      </Card.Body>
    </Card>
  </WingBlank>
</div>
    )
}

export default GClass