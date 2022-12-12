import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The member name is required',
  })
  function: string;
}
