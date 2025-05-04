
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface EulaDialogProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const EulaDialog = ({ open, onClose, onAccept }: EulaDialogProps) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      onAccept();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md md:max-w-xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Соглашение об обработке персональных данных</DialogTitle>
        </DialogHeader>

        <div className="py-4 text-left max-h-[50vh] overflow-y-auto pr-2">
          <p className="mb-4">
            Я, субъект персональных данных, в соответствии с Федеральным законом от 27 июля 2006 года № 152 «О персональных данных» предоставляю согласие на обработку моих персональных данных.
          </p>
          
          <p className="mb-4">
            Настоящим я подтверждаю, что ознакомлен(а) с <Link to="/privacy" className="text-fitkids-yellow hover:underline">Политикой конфиденциальности</Link> и даю согласие на обработку моих персональных данных.
          </p>
          
          <p className="mb-4">
            Я осознаю, что обработка персональных данных может включать в себя следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
          </p>
          
          <p>
            Согласие на обработку персональных данных действует в течение 5 лет. Согласие может быть отозвано путем направления письменного уведомления по адресу: pgob818@gmail.com
          </p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="terms" checked={accepted} onCheckedChange={(checked) => setAccepted(checked === true)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            Я принимаю условия соглашения и даю согласие на обработку персональных данных
          </label>
        </div>

        <DialogFooter>
          <Button type="button" onClick={onClose} variant="outline">
            Отмена
          </Button>
          <Button 
            type="button" 
            onClick={handleAccept} 
            disabled={!accepted}
            className={!accepted ? "opacity-50 cursor-not-allowed" : ""}
          >
            Подтвердить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EulaDialog;
