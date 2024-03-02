import { BaseProps } from "../types";
import { FormEvent, useState } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isActive: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUser(formData);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" value={formData.name} onChange={onChange} />
        Email: <input name="email" value={formData.email} onChange={onChange} />
        Active: <input type="checkbox" name="isActive" checked={formData.isActive} onChange={onChange} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
