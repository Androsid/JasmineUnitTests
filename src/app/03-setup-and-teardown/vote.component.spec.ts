import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  //Arrange
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvored', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement downVotes when downvotes', () => {
    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});