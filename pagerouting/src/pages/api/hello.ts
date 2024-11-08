/**
 * localhost:3000/api/hello 로 요청을 보낼 시 이곳에서 응답한다
 * 특별한 상황이 아니면 자주 사용하지 않는다
 */
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
